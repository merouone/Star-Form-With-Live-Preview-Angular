/**
 * Star class Model
 */
export class Star {
    
    constructor(
        id : number,
        public firstName   : string,
        public lastName    : string,
        public picture     ?: string,
        public description ?: string,
        public stars       ?: number){
        // nothing here 
    }

}
