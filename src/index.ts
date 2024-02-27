console.log('veikia')

import { UserType } from '../types.js';
// pasikeisti .ts i .js!!!===============

const newUser: UserType = {
    name: 'John',
    city: 'New York',
    occupation: 'Engineer',
    age: 30,
};
console.log(newUser);
// ==========atskirti atskiras kodo dalis====

// ========generics==========
type PropsType<T> = {
    arg1: T;
    arg2: T;
    arg3: boolean
};

const  props: PropsType<string> = {

    arg1: "",
    arg2: 234,
    arg3: true,
};
// ========generics==========

// koks tipas bus paduodamas, toks tures ir gristi is funkcijos : po argumento sklaiustu nurodome, kokio tipo grazinti

const getImprovedVariable =<T>(arg: T): T=> {
// xxxxxxxxxx
    return arg;

};
getImprovedVariable <number>(2344);

// =========ENUMS==========

enum PAY_STATUS {
    PAYD = 'PAYD',
    PENDING = 'PENDING',
    NOT_PAYD = 'NOT_PAYD',
};

type PaymentType ={
    amount: number;
    receiver: string;
    sender: string;
    status: PAY_STATUS;
};

const payment: PaymentType = {
    amount: 100,
    receiver: 'John',
    sender: 'Mary',
    status: PAY_STATUS.PAYD,

};

// =========TYPES===============

type ItemType = {
color: 'red' | 'green' | 'blue' | 'yellow';
material: 'metal' | 'wood' | 'plastic';
heightCm: number;
};

type SkillType = {
skillTitle: string;
power: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
};

type CharacterType = ItemType | SkillType; 
// arba gali buti privalomos abi savybes su zenklu &  =======

const character: CharacterType = {
    color: 'red',
    material: 'metal',
   skillTitle: 'fireball',
   power: 10,
};




