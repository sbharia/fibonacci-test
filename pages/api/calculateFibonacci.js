import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {

    if(req.method == 'POST'){
        const {n} = req.body;
        await calculateFibonacci(parseInt(n));
        res.status(200).json({result:"OK"});
    }

    else{
        res.status(405).end();
    }
}

async function calculateFibonacci(n) {
    const existingNumbers = await prisma.fibonacci.findMany({
        orderBy: {id: "asc"},
    });

    let count = existingNumbers.length;

    if(count<n) {
        let num1 = 0, num2 = 1;
        if(count >=2){
            num1 = existingNumbers[count-2].value;
            num2 = existingNumbers[count-1].value;

            for(let i=count; i<n; i++){
                let next = num1 + num2;
                await prisma.fibonacci.create({ data: { value: next } });
                num1 = num2;
                num2 = next;
            }
        }

        else if(count == 0 && n == 1){
            await prisma.fibonacci.create({ data: { value: num1 } });
        }
        else if(count == 0 && n >= 2){
            await prisma.fibonacci.create({ data: { value: num1 } });
            await prisma.fibonacci.create({ data: { value: num2 } });
            for(let i=2; i<n; i++){
                let next = num1 + num2;
                await prisma.fibonacci.create({ data: { value: next } });
                num1 = num2;
                num2 = next;
            }
        }
        else if(count == 1 && n>=2){
            await prisma.fibonacci.create({ data: { value: num2 } });
            for(let i=2; i<n; i++){
                let next = num1 + num2;
                await prisma.fibonacci.create({ data: { value: next } });
                num1 = num2;
                num2 = next;
            }
        }

    }
}