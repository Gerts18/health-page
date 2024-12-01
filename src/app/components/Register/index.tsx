// Importaciones necesarias de React y otros módulos
import React, { useState, ChangeEvent, FormEvent } from 'react';
import {
  Card,
  CardBody,
  Input,
  Checkbox,
  Button,
  Select,
  SelectItem,
} from '@nextui-org/react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useRouter } from 'next/navigation';

// Definición de la interfaz para los datos del formulario
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  category: string;
  termsAccepted: boolean;
}

// Definición de la interfaz para los errores del formulario
interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  category?: string;
  termsAccepted?: string;
}

// Componente principal del formulario de registro
export default function RegistrationForm() {

  // Hook de enrutamiento para redireccionar al usuario
  const router = useRouter();

  // Opciones disponibles para el campo de categoría
  const categories = [
    { label: 'Paciente', value: '1' },
    { label: 'Doctor', value: '2' },
    { label: 'Otro', value: '3' },
  ];

  // Estado para almacenar los datos del formulario
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    category: '',
    termsAccepted: false,
  });

  // Estado para almacenar los errores de validación del formulario
  const [errors, setErrors] = useState<FormErrors>({});
  
  // Estado para manejar el estado de envío del formulario
  const [isSubmitting, setIsSubmitting] = useState(false);

  /**
   * Función de validación para cada campo del formulario
   * @param name - Nombre del campo a validar
   * @param value - Valor del campo a validar
   * @returns Mensaje de error si la validación falla, de lo contrario una cadena vacía
   */
  const validateField = (name: keyof FormData, value: any): string => {
    let error = "";

    switch (name) {
      case "firstName":
        if (!value.trim()) {
          error = "El nombre es obligatorio";
        } else if (value.trim().length < 3) {
          error = "El nombre debe tener al menos 3 caracteres";
        }
        break;
      case "lastName":
        if (!value.trim()) {
          error = "Los apellidos son obligatorios";
        } else if (value.trim().length < 3) {
          error = "Los apellidos deben tener al menos 3 caracteres";
        }
        break;
      case "email":
        if (!value.trim()) {
          error = "El correo electrónico es obligatorio";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
        ) {
          error = "Por favor, ingresa un correo válido";
        }
        break;
      case "password":
        if (!value) {
          error = "La contraseña es obligatoria";
        } else if (value.length < 6) {
          error = "La contraseña debe tener al menos 6 caracteres";
        }
        break;
      case "category":
        if (!value) {
          error = "Por favor, selecciona una categoría";
        }
        break;
      case "termsAccepted":
        if (!value) {
          error = "Debes aceptar los términos y condiciones";
        }
        break;
      default:
        break;
    }

    return error;
  };

  /**
   * Función para validar todo el formulario
   * @returns Objeto con los errores encontrados en el formulario
   */
  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    // Itera sobre cada campo del formulario y valida
    (Object.keys(formData) as Array<keyof FormData>).forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) {
        newErrors[field] = error;
      }
    });

    return newErrors;
  };

  /**
   * Maneja los cambios en los campos de entrada (inputs)
   * @param e - Evento de cambio en el input
   */
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;

    // Actualiza el estado del formulario con el nuevo valor
    setFormData((prev) => ({
      ...prev,
      [name]: fieldValue,
    }));

    // Valida el campo específico que cambió
    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name as keyof FormData, fieldValue),
    }));
  };

  /**
   * Maneja los cambios en el campo de selección (select)
   * @param value - Valor seleccionado
   */
  const handleSelectChange = (value: string) => {
    const selectedValue = value || '';
    setFormData((prev) => ({
      ...prev,
      category: selectedValue,
    }));

    // Valida el campo de categoría
    setErrors((prev) => ({
      ...prev,
      category: validateField('category', selectedValue),
    }));
  };

  /**
   * Maneja los cambios en el checkbox de términos y condiciones
   * @param isSelected - Estado seleccionado del checkbox
   */
  const handleCheckboxChange = (isSelected: boolean) => {
    setFormData((prev) => ({
      ...prev,
      termsAccepted: isSelected,
    }));

    // Valida el campo de aceptación de términos
    setErrors((prev) => ({
      ...prev,
      termsAccepted: validateField('termsAccepted', isSelected),
    }));
  };

  /**
   * Maneja el envío del formulario
   * @param e - Evento de envío del formulario
   */
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Valida todo el formulario
    const validationErrors = validateForm();
    setErrors(validationErrors);

    // Si no hay errores, procede a enviar los datos
    if (Object.keys(validationErrors).length === 0) {
      try {
        // Realiza una solicitud POST al endpoint /api/users con los datos del formulario
        const response = await fetch('/api/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          // Manejo de errores del servidor
          const errorData = await response.json();
          console.error('Error:', errorData);
          toast.error("Error al registrar. Por favor, intenta de nuevo."); // Notificación de error
        } else {
          // Registro exitoso
          toast.success("Registro exitoso!, redirigiendo ..."); // Notificación de éxito

          // Redirige al usuario a la página de login después de 2 segundos
          setTimeout(() => {
            router.push('/login');
          }, 2000);
        }
      } catch (error) {
        // Manejo de errores inesperados
        console.error('Error:', error);
        toast.error("Ocurrió un error inesperado."); // Notificación de error inesperado
      } finally {
        setIsSubmitting(false);
      }

      // Reinicia los datos del formulario después del envío
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        category: "",
        termsAccepted: false,
      });
      setIsSubmitting(false);
    } else {
      // Si hay errores en el formulario, muestra una notificación
      console.log("Hay errores en el formulario");
      toast.error("Por favor, corrige los errores en el formulario."); // Notificación de errores en el formulario
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="relative w-full h-screen mt-[76px] flex flex-col items-center justify-center p-4 gap-5 bg-cover bg-center bg-authImage"
    >
      {/* Encabezado del formulario */}
      <div className="flex flex-col gap-5">
        <h1 className="text-5xl font-bold text-center text-white">Registrar</h1>
        <p className="text-center text-sm text-white ">
          Ingrese sus datos en los campos establecidos
        </p>
      </div>

      {/* Tarjeta que contiene el formulario */}
      <Card className="w-full max-w-md p-6 shadow-lg">
        <CardBody className="flex flex-col gap-4">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            {/* Campo de entrada para el nombre */}
            <Input
              label="Nombre"
              type='text'
              variant="bordered"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              errorMessage={errors.firstName}
              isInvalid={!!errors.firstName}
              isRequired
            />

            {/* Campo de entrada para los apellidos */}
            <Input
              label="Apellidos"
              type='text'
              variant="bordered"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              errorMessage={errors.lastName}
              isInvalid={!!errors.lastName}
              isRequired
            />

            {/* Campo de entrada para el correo electrónico */}
            <Input
              label="Correo"
              type="email"
              variant="bordered"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              errorMessage={errors.email}
              isInvalid={!!errors.email}
              isRequired
            />

            {/* Campo de entrada para la contraseña */}
            <Input
              label="Contraseña"
              type="password"
              variant="bordered"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              errorMessage={errors.password}
              isInvalid={!!errors.password}
              isRequired
            />

            {/* Campo de selección para la categoría */}
            <Select
              label="Categoría"
              variant="bordered"
              selectedKeys={new Set([formData.category])}
              onSelectionChange={(keys) =>
                handleSelectChange(Array.from(keys).join(''))
              }
              isInvalid={!!errors.category}
              errorMessage={errors.category}
            >
              {/* Opciones disponibles para la selección */}
              {categories.map((category) => (
                <SelectItem key={category.value} value={category.value}>
                  {category.label}
                </SelectItem>
              ))}
            </Select>

            {/* Checkbox para aceptar términos y condiciones */}
            <Checkbox
              size="sm"
              name="termsAccepted"
              isSelected={formData.termsAccepted}
              onChange={(e) => handleCheckboxChange(e.target.checked)}
              isRequired
            >
              Estoy de acuerdo con los términos y condiciones
            </Checkbox>
            {/* Mensaje de error si no se aceptan los términos */}
            {errors.termsAccepted && (
              <div className="text-[hsl(339,90%,51%)] text-tiny m-0">
                {errors.termsAccepted}
              </div>
            )}

            {/* Botón de envío del formulario */}
            <Button
              className="w-full bg-button text-white font-medium mt-2 p-7"
              radius="sm"
              type="submit"
              isLoading={isSubmitting}
            >
              Registrarse
            </Button>
          </form>
        </CardBody>
      </Card>

      {/* Contenedor para las notificaciones tipo toast */}
      <ToastContainer />
    </div>
  );
}
