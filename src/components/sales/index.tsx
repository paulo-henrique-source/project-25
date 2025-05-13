"use client";

import { CircleDollarSign } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";

export function Sales() {
  return (
    <Card className='flex-1'>
      <CardHeader>
        <div className='flex items-center justify-center'>
          <CardTitle className='text-lg sm:text-xl text-gray-800'>
            Últimos clientes
          </CardTitle>
          <CircleDollarSign className='ml-auto w-4 h-4' />
        </div>
        <CardDescription>Novos clientes nas últimas 24 horas</CardDescription>
      </CardHeader>

      <CardContent>
        <article className='flex items-center gap-2 border-b py-2'>
          <Avatar className='w-8 h-8'>
            <AvatarImage src='https://media.licdn.com/dms/image/v2/D4E03AQHAfNuCmKSdtA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1700334328407?e=1751500800&v=beta&t=z7HdwbX9dDyqYnjq2A7cwRMTUeCsZ5ik3MoiU6EgBCA' />
            <AvatarFallback>PH</AvatarFallback>
          </Avatar>
          <div>
            <p className='text-sm sm:text-base font-semibold'>
              Paulo Henrique de Almeida
            </p>
            <span className='text-[12px] sm:text-sm text-gray-400'>
              paulohenrique@hotmail.com
            </span>
          </div>
        </article>

        <article className='flex items-center gap-2 border-b py-2'>
          <Avatar className='w-8 h-8'>
            <AvatarImage src='https://media.licdn.com/dms/image/v2/D4E03AQHAfNuCmKSdtA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1700334328407?e=1751500800&v=beta&t=z7HdwbX9dDyqYnjq2A7cwRMTUeCsZ5ik3MoiU6EgBCA' />
            <AvatarFallback>PH</AvatarFallback>
          </Avatar>
          <div>
            <p className='text-sm sm:text-base font-semibold'>
              Paulo Henrique de Almeida
            </p>
            <span className='text-[12px] sm:text-sm text-gray-400'>
              paulohenrique@hotmail.com
            </span>
          </div>
        </article>

        <article className='flex items-center gap-2 border-b py-2'>
          <Avatar className='w-8 h-8'>
            <AvatarImage src='https://media.licdn.com/dms/image/v2/D4E03AQHAfNuCmKSdtA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1700334328407?e=1751500800&v=beta&t=z7HdwbX9dDyqYnjq2A7cwRMTUeCsZ5ik3MoiU6EgBCA' />
            <AvatarFallback>PH</AvatarFallback>
          </Avatar>
          <div>
            <p className='text-sm sm:text-base font-semibold'>
              Paulo Henrique de Almeida
            </p>
            <span className='text-[12px] sm:text-sm text-gray-400'>
              paulohenrique@hotmail.com
            </span>
          </div>
        </article>
      </CardContent>
    </Card>
  );
}
