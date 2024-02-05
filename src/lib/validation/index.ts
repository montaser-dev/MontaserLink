import * as z from "zod"


export const SignupValidation = z.object({
    name: z.string().min(2, {message: 'Too short'}),
    username: z.string(),
    email:z.string(),
    password: z.string(),
})
