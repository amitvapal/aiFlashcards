import { NextResponse } from 'next/server'
import OpenAI from "openai"

const systemPrompt = `
You are a flashcard creator that helps users create flashcards for studying. 
Each flashcard should have a question on one side and the answer on the other side. 

1. Create clear and concise questions that are easy to understand.
2. Provide detailed answers that explain the concept thoroughly.
3. Use simple language and avoid jargon.
4. Make sure the answer is correct and accurate.
5. Include examples and additional information if necessary.
6. Make sure the flashcards are well-organized and easy to read.
7. Use bullet points or numbered lists to break down complex information.

Return in the following Json format:
{
  "flashcards": [
        {
            "front": str, 
            "back": str  
        }
    ]
}
`;

export async function POST(req){
    const openai = OpenAI()
    const data = await req.text()

    const completion = await openai.chat.completion.create({
        messages: [
            {role: 'system', content: systemPrompt},
            {role: 'user', content: data}
        ],
        model: 'gpt-4o',
        response_format: 'json_object'
    })

    const flashcards = JSON.parse(completion.data.choices[0].message.content).flashcards
    return NextResponse.json(flashcards.flashcards)
}
