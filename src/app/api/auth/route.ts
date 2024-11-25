import { NextResponse, NextRequest } from "next/server";
import { conn } from '@/libs/PostgDB';
import { verify } from 'jsonwebtoken';

//Obtener los datos del usuario
export async function GET(request: NextRequest) {
    try {
      // Obteniendo el token
      const token = request.cookies.get('token')?.value;
  
      if (!token) {
        return NextResponse.json(
          {
            success: false,
            status: 401,
            message: 'No hay token',
            timestamp: Date.now(),
          },
          { status: 401 }
        );
      }
  
      const data = verify(token, 'secretkey'); // Obteniendo los datos del token
  
      return NextResponse.json(
        {
          success: true,
          status: 200,
          message: 'Datos Cargados',
          data: data,
          timestamp: Date.now(),
          api: 'api/users',
          method: 'GET',
        },
        { status: 200 }
      );
    } catch (error) {
      return NextResponse.json(
        {
          success: false,
          status: 500,
          message: 'Error al verificar el token',
          timestamp: Date.now(),
        },
        { status: 500 }
      );
    }
  }


//Cerrar sesión
