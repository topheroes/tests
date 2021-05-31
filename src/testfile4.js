/** 
 * Эта функция смотрит, является ли аргумент, строкой 
 * если аргумент - строка, возвращает "ура", иначе - возвращает 200
*/


const test = (argument)=>{

    if(typeof argument === string)
        return "ура"
    
    return 200;
    
        

}


export default test;