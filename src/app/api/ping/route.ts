import { NextResponse, NextRequest } from "next/server";
import {conn} from '@/libs/PostgDB'

//Endpoint created to check if the server is running

export async function GET (request:NextRequest){
    try{

        const response = await conn.query('SELECT NOW()')

        const time = response.rows[0].now

        return NextResponse.json(
            {
                succes: true,
                status: 200,
                message: "ping from server",
                timestamp:time,
            }, {status: 200}
        )
    } catch(error){
        return NextResponse.json(
            {
                succes: false,
                status: 500,
                message: "Error in server",
                error: error instanceof Error ? error.message : "No connection",
                timestamp: new Date().getTime(),
            }, {status: 500}
        )
    }
}