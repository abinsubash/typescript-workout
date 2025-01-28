//implicit type==================
// let myName = "abin"

//Exiplict type=================
// let myName:string = "abin"
// let age:number = 34

// ===================================
// to compile we are using 
// tsc.filename

// any ===============================
// if we dont no the type of a variable or return type  we can use any ..
// when we use that what dont check the datatype so that is not secure we can use array methode on string
//Runtime Errors:
// let myName:any= "abin"

//unknown ============================
//we can use if we dont not he datatype so this will check the datatype we need to ensure when we applying a operation in it
// let myname:unknown = "abin"

// never ============================
//that will never reaturn any thing we mainly used to when the throw the errors . that will not return any thing
//that will be an infinty loop  
// function sum():never{
//   while(true){
//     console.log("hi")
//   }
// }
// sum()


//// enum ===================================
// //we can use when we need to specify certain values in a variable you can use that 
// //It will automatically assign a value of that variable
// enum hi{
// "abin",
// "abhisha"
// }
// let value:hi = hi.abhisha
// console.log(value)
// enum hehe{
//     no=33,
//     yes = 55
// }
// let value = hehe.no
// console.log(value)
//Tuple ===========================
// // it an array of value we can speciy which position which type of value we can insert that will be an fixed size of array
// let x:[number,string]
// x = [34,'abin']

//Type assertion ============================
// let value:any 
// value = 34
// let heh = (value as string).split('')

//Rest parameters
// function rest (value:number,...value2:number[]):void{
// console.log(value,"rest")
// console.log(value2)
// }

// rest(34,3434,55,6,88,343,66)

// Type intersection ======================================

// type one={
//     name:string,
// }
// type  two={
//     age:number
// }
// type last=one&two

// let values :last = {name:"abin",age:33}
// console.log(values)

// async funciton syntax==================================
// async function greet():Promise <string>{
//   return "hellow world"
// }



// // strictNullChecks disabled (by defaul
// let foo: null = null;  // Valid
// let bar: undefined = undefined;  // Valid
// console.log(foo)
// console.log(bar)


//Generic functoin =============================
// function gen<T>(value1:T):T{
// return value1
// }
// gen(34)


// interface abi{
//     value:number
//     one(a:number):void
// }
// abstract class cls implements abi{
//  value:number
// constructor(value:number){
//     this.value = value
// }
// print(){
//     console.log("hehe",this.value)
// }
// abstract one(a:number):void
// }

//  class hehe extends cls{
   
//     one(a:number):void{
//         console.log("nop",a)
//     }
// }

// const hee = new hehe(34)
// hee.one(44)
// hee.print()

// class noOne{
//     getname(){
//         console.log("my name is abin")
//     }
// }
// class two extends noOne{
//     name:string
//     constructor(name:string){
//         super()
//         this.name = name
//     }
// }

//Method overloading ================================

// class methode{
//     constructor(){

//     }
//     person(value1:number,value2:number):number;
//     person(value1:string,value2:string):string;
//     person(value1:any,value2:any):any{
//         return value1+value2
//     }
// }

// const data = new methode()
// console.log(data.person(233,33))
// console.log(data.person("abin ","subash"))


// Method overriding=================================

// class one{
//     person():void{
//         console.log("one")
//     }
// }
// class two extends one{
//     constructor(){
//         super()
//     }
//    person():void{
//     console.log("two")
//    }
 
// }

// const data = new two()
// data.person()



//readOnly==========================================
// type name={
//     readonly name:string;
//     readonly age:number;
//     place:string
// }
// let person:name ={
//     name:"abin",
//     age:99,
//     place:"calicut"
// }
// person.name = "hehe"

//Reopening interfaces==================================
// interface Person{
//     name:string;
//     age:number;
// }
// interface Person{
//     place:string
// }
// let newOne:Person = {name:"abin",age:33,place:"calicut"}

//Litrel type =============================================

// let values :"abin"|"abhisha"|"roja"|"subash";
// values = "abin"

//Classes ===============================================

// class helo{
//     constructor(){

//     }
//     displayHelo(){
//         console.log("Hellow world")
//     }
// }
// const ref = new helo()

// Modifiers(Privet)=====================================

// class privat{
// private value1:number = 23
// private methode(){
// console.log("helllo",this.value1)
// }
// hello(){
//     console.log("hello")
// }
// }
// const ref = new privat()
// ref.methode()

// Modifiers(Protected)======================================
// class one{
//     private hello(){
//         console.log("hello")
//     }

//     protected hi(){
//         console.log("HI")
//     }
// }
// class Two extends one{
//     constructor(){
//         super()
//     }
//     print(){
//         // super.hello()
//         super.hi()
//     }
// }
// const ref = new one()
// ref.hi()
// const ref = new Two()
// ref.print()


// Modifiers (public)======================================

// class pub{
//     public value :number = 23
//     constructor(){

//     }
//     public nice(){
//         console.log("Podda myy")
//     }
// }
// const ref = new pub()
// ref.nice()

//Get methode ===========================
// class getMethod{
//     private name:string="abin"
//     constructor(){

//     }   
//     one(){
//         console.log(this.name)
//     }
//    get privatVar(){
//         return this.name
//     }
// }
// const ref = new getMethod()
// console.log(ref.privatVar)


// setMethod===========================================
// class setMethod{
//     private name:string="abin"
//     one(){
//         console.log(this.name)
//     }
//     set privateVar(name:string){
//         this.name = name
//     }
// }
// const ref = new setMethod()
// ref.privateVar="subash"
// ref.one()

//Abstraction ===========================================
// abstract class abi{
//    abstract display():void
//    another(){
//     console.log("HI")
//    }
// }
// class fullfill extends abi{
//     constructor(){
//         super()
//     }
//     newClas(){
//         super.another()
//     }
//     display(): void {
//         console.log("podda")
//     }
// }
// const ref = new fullfill()
// ref.display()
// ref.newClas()


//Optional properties ====================================
// type alo={
//     name:string;
//     age:number;
//     place?:string
// }

// let value:alo={name:"abin",age:33}

// Generics ============================================
 
// function hehee<T>(name:T,age:T):T{
//     return name
// }
// console.log(hehee(33,33))

//Multiple Type Generics ==================================

// function multiple<T,U,V>(name:T,age:U,is18:V):[U,T,V]{
//     return [age,name,is18]
// }

// console.log(multiple("abin",18,true))

// Generics interfaces ==================================

// interface gen<T,U>{
//     name:T;
//     age:U;
//     place:T
// }
// let eric:gen<string,number>={name:"abin",age:23,place:"calicut"}

// interface gen<T>{
//     name:T,
//     place:T
// }
// let eric:gen<string>={name:"abin",place:"calicut"}


//Generic Classes===============================

// class generic<T>{
//     private name:T
//     constructor (name:T){
//         this.name = name
//     }
//     display():T{
//         return this.name
//     }
// }
// const ref = new generic("abin")
// console.log(ref.display())

//Generic Utilityes 
// //partels<> =====================================================
// // make properties optional
// interface hehe{
//     name:string;
//     age:number;
//     place:string;
// }

// let values:Partial<hehe>={name:"abin",age:33}

// // Required ====================================================
// 
// interface nohh{
//     name?:string;
//     age?:number
// }
// let values:Required<nohh>= {name:"Abin",age:33}


// // Readonly==================================================== 
// interface read{
//     name:string;
//     age:number;
//     place:string
// }
// let values:Readonly<read>={name:"abin",age:23,place:"calicut"}
// values.name = "abin"


// pick ====================================================
// pick only you want
// interface pick{
//     name:string;
//     age:number;
// }

// let values :Pick<pick,"name">={name:"abin"}
// console.log(values)

// Omit======================================================
// to delete a type
// interface omit{
//     name:string;
//     age:number;
//     place:string
// }
// let value:Omit<omit,"name">={age:99,place:"calicut"}

// Record ==================================================
// creating a new object
 
// type record = Record<"name"|"place",string>;

// let obj:record = {
//     name:"abin",
//     place:"calicut"
// }

// exclude=======================================================
// Korach types venam exclude cheyyan (remove cheyyan) undenkil, Exclude upayogikkam.
// type exclude = string|number|boolean
// type res = Exclude<exclude,number>

// extract =======================================================

// type Allkey = "name"|"age"|"place"
// type all = Extract<Allkey,"name"|"age">


//Nullable =====================================================
// type ty = undefined|null|string
// type hehe=NonNullable<ty>

// return type of 
//instance of 
// Parameters<T>

//Optional tuples===================================================
// let arr:[number,string,number?] =[3,"abin"]