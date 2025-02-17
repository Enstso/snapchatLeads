import vine from '@vinejs/vine'

export const campaignValidator = vine.compile(
    vine.object({
        snapchater: vine.string().trim(),
        url: vine.string().trim(),
        promo: vine.boolean()

    })
)