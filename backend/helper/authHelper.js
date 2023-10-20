import bcrypt from "bcrypt";

// this will help in hashing password will registering an user using bcrypt library.
export const hashPassword = async (password) => {
    try{
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password,saltRounds);
        return hashedPassword;
    }catch(error){
        console.log(error);
    }
};

// this will compare hashed password and user entered password by user will logging in.
export const comparePassword = async (password,hashedPassword) =>{
    try{
        return bcrypt.compare(password,hashedPassword);
    }catch(error){
        console.log(error);
    }
};