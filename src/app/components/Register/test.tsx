import React, { useState } from 'react';
import {
  Card,
  CardBody,
  Input,
  Checkbox,
  Button,
  Select,
  SelectItem,
} from '@nextui-org/react';


interface RegistrationData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  category: string;
  termsAccepted: boolean;
}

interface RegistrationErrors {
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

  const [formData, setFormData] = useState<RegistrationData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    category: '',
    termsAccepted: false,
  });

  const [errors, setErrors] = useState<RegistrationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const validate = (): boolean => {
    const newErrors: RegistrationErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'El nombre es obligatorio';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Los apellidos son obligatorios';
    }

    if (!formData.email) {
      newErrors.email = 'El correo electrónico es obligatorio';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El correo electrónico no es válido';
    } else {
      const allowedDomains = ['gmail.com', 'outlook.com'];
      const emailDomain = formData.email.split('@')[1];
      if (!allowedDomains.includes(emailDomain)) {
        newErrors.email = 'El correo debe ser @gmail.com o @outlook.com';
      }
    }

    if (!formData.password) {
      newErrors.password = 'La contraseña es obligatoria';
    } else if (formData.password.length < 6) {
      newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
    }

    if (!formData.category) {
      newErrors.category = 'Seleccione una categoría';
    }

    if (!formData.termsAccepted) {
      newErrors.termsAccepted = 'Debe aceptar los términos y condiciones';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      category: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    console.log('Form data:', formData);

    try {
      const response = await fetch('/api/none', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        // Manejo de errores del servidor
        const errorData = await response.json();
        setMessage({ type: 'error', text: `Error: ${errorData.message}` });
      } else {
        // Registro exitoso
        setMessage({ type: 'success', text: '¡Registro exitoso!' });

        // Redirige a la página deseada después de 2 segundos
        setTimeout(() => {
           //redirige a la pestaña
        }, 2000);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage({
        type: 'error',
        text: 'Ocurrió un error al registrar. Inténtelo de nuevo más tarde.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center p-4 gap-5 bg-cover bg-center bg-authImage`}
    >
      <div className="flex flex-col gap-5">
        <h1 className="text-5xl font-bold text-center text-white">Registrar</h1>
        <p className="text-center text-sm text-white ">
          Ingrese sus datos en los campos establecidos
        </p>
      </div>

      <Card className="w-full max-w-md p-4">
        <CardBody className="flex flex-col gap-4">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center">

            <Input
              label="Nombre"
              labelPlacement='inside'
              type='text'
              variant="bordered"
              required
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              errorMessage={errors.firstName}
            />

            <Input
              label="Apellidos"
              type='text'
              variant="bordered"
              required
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              errorMessage={errors.lastName}
            />

            <Input
              label="Correo"
              type="email"
              variant="bordered"
              required
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              errorMessage={errors.email}
              isInvalid={!!errors.email}
            />

            <Input
              label="Contraseña"
              type="password"
              variant="bordered"
              required
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              errorMessage={errors.password}
            />

            <Select
              label="Categoría"
              variant="bordered"
              required
              selectedKeys={new Set([formData.category])}
              onSelectionChange={(keys) =>
                handleSelectChange(Array.from(keys).join(''))
              }
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
              required
              name="termsAccepted"
              isSelected={formData.termsAccepted}
              onValueChange ={(isSelected: boolean) =>
                setFormData((prev) => ({
                  ...prev,
                  termsAccepted: isSelected,
                }))
              }
            >
              Estoy de acuerdo con los términos y condiciones
            </Checkbox>
            {errors.termsAccepted && (
              <div className="text-red-500 text-sm">
                {errors.termsAccepted}
              </div>
            )}

            <Button
              className="w-full p-7 bg-button text-white font-medium mt-5"
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
