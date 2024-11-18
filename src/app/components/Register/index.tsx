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

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  category: string;
  termsAccepted: boolean;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  category?: string;
  termsAccepted?: string;
}

export default function RegistrationForm() {
  const categories = [
    { label: 'Paciente', value: '1' },
    { label: 'Doctor', value: '2' },
    { label: 'Otro', value: '3' },
  ];

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    category: '',
    termsAccepted: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Función de validación para cada campo
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

  // Validar todo el formulario
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

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: fieldValue,
    }));

    // Validar el campo específico
    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name as keyof FormData, fieldValue),
    }));
  };

  const handleSelectChange = (value: string | Set<string> | undefined) => {
    const selectedValue = typeof value === 'string' ? value : Array.from(value)[0] || '';
    setFormData((prev) => ({
      ...prev,
      category: selectedValue,
    }));

    setErrors((prev) => ({
      ...prev,
      category: validateField('category', selectedValue),
    }));
  };

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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Formulario enviado:", formData);

      try {
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
          
        } else {
          // Registro exitoso
  
          // Redirige a la página deseada después de 2 segundos
          setTimeout(() => {
             //redirige a la pestaña
          }, 2000);
        }
      } catch (error) {
        console.error('Error:', error);
        
      } finally {
        setIsSubmitting(false);
      }

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
      console.log("Hay errores en el formulario");
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-4 gap-5 bg-cover bg-center bg-authImage"
    >
      <div className="flex flex-col gap-5">
        <h1 className="text-5xl font-bold text-center text-white">Registrar</h1>
        <p className="text-center text-sm text-white ">
          Ingrese sus datos en los campos establecidos
        </p>
      </div>

      <Card className="w-full max-w-md p-6 shadow-lg">
        <CardBody className="flex flex-col gap-4">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

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

            <Checkbox
              size="sm"
              name="termsAccepted"
              isSelected={formData.termsAccepted}
              onChange={(e) => handleCheckboxChange(e.target.checked)}
              isRequired
            >
              Estoy de acuerdo con los términos y condiciones
            </Checkbox>
            {errors.termsAccepted && (
              <div className="text-[hsl(339,90%,51%)] text-tiny m-0">
                {errors.termsAccepted}
              </div>
            )}

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
    </div>
  );
}
