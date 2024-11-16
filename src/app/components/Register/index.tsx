

import { Button } from "@nextui-org/react"
import { useState } from "react"

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [securityQuestion, setSecurityQuestion] = useState('');

    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    phone,
                    password,
                    securityQuestion,
                }),
            });

            if (response.ok) {
                // Registro exitoso
                const data = await response.json();
                console.log('Registro exitoso:', data);

                setName('');
                setEmail('');
                setPhone('');
                setPassword('');
                setSecurityQuestion('');

                // Mostrar mensaje de éxito
                setSuccessMessage('¡Registro exitoso!');
            } else {
                // Manejo de errores
                const errorData = await response.json();
                console.error('Error en el registro:', errorData);
                // Mostrar mensaje de error al usuario si es necesario
            }
        } catch (error) {
            console.error('Ocurrió un error:', error);
            // Manejo de errores de red o inesperados
        }
    };


    return (
        <section>
            <div className="min-h-screen flex items-center justify-center bg-gray-100" >
                <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-md">
                    <h2 className="text-2xl font-bold text-center mb-6">
                        Subamos de nivel en la lucha contra el cáncer, juntos.
                    </h2>

                    {successMessage && (
                        <div className="mb-4 text-green-600 text-center font-semibold">
                            {successMessage}
                        </div>
                    )}

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Nombre
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                                placeholder="Tu nombre"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                                placeholder="tú@correo.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                Teléfono
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                                placeholder="+52 (555) 000-0000"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Contraseña
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="security-question" className="block text-sm font-medium text-gray-700">
                                Pregunta de seguridad
                            </label>
                            <input
                                type="text"
                                id="security-question"
                                className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                                placeholder="Escribe tu pregunta de seguridad"
                                value={securityQuestion}
                                onChange={(e) => setSecurityQuestion(e.target.value)}
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-2 bg-pink-500 text-white font-semibold rounded-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50"
                        >
                            Registrar
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Register