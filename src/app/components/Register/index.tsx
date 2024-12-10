// Importación de módulos y componentes necesarios
import React, { useState, ChangeEvent, FormEvent } from 'react'; // Importa React y hooks para manejar el estado y eventos
import {
  Card,
  CardBody,
  Input,
  Checkbox,
  Button,
  Select,
  SelectItem,
} from '@nextui-org/react'; // Importa componentes de la librería @nextui-org/react para la interfaz de usuario

import { ToastContainer, toast } from 'react-toastify'; // Importa componentes para notificaciones
import 'react-toastify/dist/ReactToastify.css'; // Importa estilos para las notificaciones

import { useRouter } from 'next/navigation'; // Importa el hook useRouter para la navegación en Next.js

// Definición de la interfaz para los datos del formulario
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  category: string;
  termsAccepted: boolean;
  professionalId?: string;
}

// Definición de la interfaz para los errores del formulario
interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  category?: string;
  termsAccepted?: string;
  professionalId?: string;
}

// Componente principal del formulario de registro
export default function RegistrationForm() {
  const router = useRouter(); // Hook para la navegación

  // Definición de las categorías disponibles en el select
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
    professionalId: '',
  });

  // Estado para almacenar los errores de validación del formulario
  const [errors, setErrors] = useState<FormErrors>({});

  // Estado para indicar si el formulario está siendo enviado
  const [isSubmitting, setIsSubmitting] = useState(false);

  /**
   * Función para validar un campo específico del formulario.
   * @param name - Nombre del campo a validar.
   * @param value - Valor del campo a validar.
   * @returns Mensaje de error si la validación falla, de lo contrario una cadena vacía.
   */
  const validateField = (name: keyof FormData, value: FormData[keyof FormData]): string => {
    let error = "";

    switch (name) {
      case "firstName":
        if (typeof value === 'string') {
          if (!value.trim()) {
            error = "El nombre es obligatorio";
          } else if (value.trim().length < 3) {
            error = "El nombre debe tener al menos 3 caracteres";
          }
        }
        break;
      case "lastName":
        if (typeof value === 'string') {
          if (!value.trim()) {
            error = "Los apellidos son obligatorios";
          } else if (value.trim().length < 3) {
            error = "Los apellidos deben tener al menos 3 caracteres";
          }
        }
        break;
      case "email":
        if (typeof value === 'string') {
          if (!value.trim()) {
            error = "El correo electrónico es obligatorio";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
          ) {
            error = "Por favor, ingresa un correo válido";
          }
        }
        break;
      case "password":
        if (typeof value === 'string') {
          if (!value) {
            error = "La contraseña es obligatoria";
          } else if (value.length < 6) {
            error = "La contraseña debe tener al menos 6 caracteres";
          }
        }
        break;
      case "category":
        if (typeof value === 'string') {
          if (!value) {
            error = "Por favor, selecciona una categoría";
          }
        }
        break;
      case "termsAccepted":
        if (typeof value === 'boolean') {
          if (!value) {
            error = "Debes aceptar los términos y condiciones";
          }
        }
        break;
      case "professionalId":
        if (typeof value === 'string') {
          if (formData.category === '2' && (!value.trim() || value.trim().length < 5)) {
            error = "El ID de cédula profesional es obligatorio y debe tener al menos 5 caracteres";
          }
        }
        break;
      default:
        break;
    }

    return error;
  };

  /**
   * Función para validar todo el formulario.
   * @returns Un objeto con los errores encontrados en cada campo.
   */
  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    (Object.keys(formData) as Array<keyof FormData>).forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) {
        newErrors[field] = error;
      }
    });

    return newErrors;
  };

  /**
   * Manejador de cambios en los campos de entrada (inputs).
   * @param e - Evento de cambio en el input.
   */
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const fieldValue: FormData[keyof FormData] = type === 'checkbox' ? checked : value;

    // Actualiza el estado del formulario con el nuevo valor
    setFormData((prev) => ({
      ...prev,
      [name]: fieldValue,
    }));

    // Valida el campo que ha cambiado y actualiza los errores
    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name as keyof FormData, fieldValue),
    }));
  };

  /**
   * Manejador de cambios en el campo de selección (select).
   * @param value - Valor seleccionado en el select.
   */
  const handleSelectChange = (value: string) => {
    const selectedValue = value || '';
    setFormData((prev) => ({
      ...prev,
      category: selectedValue,
    }));

    setErrors((prev) => ({
      ...prev,
      category: validateField('category', selectedValue),
    }));
  };

  /**
   * Manejador de cambios en el checkbox de aceptación de términos.
   * @param isSelected - Estado del checkbox (seleccionado o no).
   */
  const handleCheckboxChange = (isSelected: boolean) => {
    setFormData((prev) => ({
      ...prev,
      termsAccepted: isSelected,
    }));

    setErrors((prev) => ({
      ...prev,
      termsAccepted: validateField('termsAccepted', isSelected),
    }));
  };

  /**
   * Manejador del envío del formulario.
   * @param e - Evento de envío del formulario.
   */
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario
    setIsSubmitting(true); // Indica que el formulario está siendo enviado

    const validationErrors = validateForm(); // Valida todo el formulario
    setErrors(validationErrors); // Actualiza el estado de errores

    // Si no hay errores de validación, procede a enviar los datos
    if (Object.keys(validationErrors).length === 0) {
      console.log('Formulario válido:', formData);
      try {
        // Envía los datos del formulario a la API correspondiente
        const response = await fetch('/api/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          // Si la respuesta no es exitosa, maneja los errores específicos
          const errorData = await response.json();

          console.error('Error encontrado:', errorData);

          // Manejo de errores específico según el mensaje de error recibido
          if (errorData['error'].includes('unique_professionalid_except_none')) {
            toast.error("La cédula profesional ya está registrada. Por favor, intenta con otra.");
          } else if (errorData['error'].includes('users_pkey')){
            toast.error("El correo ya está registrado. Por favor, intenta con otro.");
          } else {
            toast.error("Error al registrar. Por favor, intenta de nuevo.");
          }

        } else {
          // Si la respuesta es exitosa, muestra una notificación de éxito y redirige al usuario
          toast.success("Registro exitoso!, redirigiendo ...");
          setTimeout(() => {
            router.push('/Login'); // Redirige al usuario a la página de login después de 2 segundos
          }, 2000);
        }
      } catch (error: unknown) {
        // Manejo de errores inesperados durante la solicitud
        console.error('Error:', error);
        toast.error("Ocurrió un error inesperado.");
      } finally {
        setIsSubmitting(false); // Finaliza el estado de envío
      }

      // Reinicia los campos del formulario después del envío
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        category: "",
        termsAccepted: false,
        professionalId: "",
      });
      setIsSubmitting(false);
    } else {
      // Si hay errores de validación, muestra una notificación de error
      toast.error("Por favor, corrige los errores en el formulario.");
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="relative w-full mt-[76px] flex flex-col items-center justify-center p-4 pt-10 gap-5 bg-cover bg-center bg-authImage"
    >
      {/* Título y descripción del formulario */}
      <div className="flex flex-col gap-5">
        <h1 className="text-5xl font-bold text-center text-white">Registrar</h1>
        <p className="text-center text-sm text-white ">
          Ingrese sus datos en los campos establecidos
        </p>
      </div>

      {/* Tarjeta que contiene el formulario */}
      <Card className="w-full max-w-md p-6 shadow-lg overflow-visible">
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
              {categories.map((category) => (
                <SelectItem key={category.value} value={category.value}>
                  {category.label}
                </SelectItem>
              ))}
            </Select>

            {/* Campo de entrada para la cédula profesional, solo visible si la categoría es 'Doctor' */}
            {formData.category === '2' && (
              <Input
                label="Cédula Profesional"
                type='text'
                variant="bordered"
                name="professionalId"
                value={formData.professionalId}
                onChange={handleInputChange}
                errorMessage={errors.professionalId}
                isInvalid={!!errors.professionalId}
                isRequired
              />
            )}

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
            {/* Mensaje de error para el checkbox si no se acepta */}
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
              isLoading={isSubmitting} // Indica si el formulario está siendo enviado
            >
              Registrarse
            </Button>
          </form>
        </CardBody>
      </Card>

      {/* Contenedor para las notificaciones */}
      <ToastContainer />
    </div>
  );
}
