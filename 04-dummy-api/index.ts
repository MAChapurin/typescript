enum EGender {
  male = 'male',
  female = 'female'
}

enum EMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE'
}

interface IHair {
  color: string,
  type: string
}

interface IAddress {
  address: string,
  city: string,
  coordinates: any,
  postalCode: string,
  state: string
}

interface IBank {
  cardExpire: string,
  cardNumber: string,
  cardType: string,
  currency: string,
  iban: string
}

interface ICompany {
  address: IAddress,
  department: string,
  name: string,
  title: string
}

interface IUser {
  id: number,
  firstName: string,
  lastName: string,
  maidenName: string,
  age: number,
  gender: EGender,
  email: string,
  phone: string,
  username: string,
  password: string,
  birthDate: string,
  image: string,
  bloodGroup: string,
  height: number,
  weight: number,
  eyeColor: string,
  hair: IHair,
  domain: string,
  ip: string,
  address: IAddress,
  macAddress: string,
  university: string,
  bank: IBank,
  company: ICompany,
  ein: string,
  ssn: string,
  userAgent: string
}

const axios = require('axios');

axios.get('https://dummyjson.com/users',  { method: EMethod.GET,}).then((resp: { data: { users: IUser[] } }) => {
    console.log(resp.data.users);
}).catch((e: { message: any }) => console.log(e.message));

