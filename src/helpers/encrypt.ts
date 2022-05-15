import bcrypt from 'bcryptjs'

export const generateHash = async (password: string) => {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
}

export const comparePassword = async (password: string, passwordToCompare: string) =>  {
    const isMatch = await bcrypt.compare(password, passwordToCompare)
    return isMatch
}
