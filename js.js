class String {
    constructor() {

    }
    
    set(S1){
        this.s1 = S1;
        this.s2 = S1;
    }
    
    run(){
        if((this.s2).length%2==0){
            this.s2 = (this.s2).split("");
            for(let i = 0;i<(this.s2).length; i++){
                if(+(this.s2)[i]%2==0){
                    (this.s2).splice(i, 1);
                }
            }
            this.s2 = (this.s2).join("");
        }
    }

    print(){
        console.log(this.s1);
        console.log(this.s2);
        document.body.innerHTML = [this.s1,this.s2];
        
    }
}

let str1 = new String();

str1.set(prompt());
str1.run();
str1.print();
let text =[str1.s1,str1.s2];
document.write(
        '<a href="data:text/plain;charset=utf-8,%EF%BB%BF' + encodeURIComponent(text) + '" download="text.txt">text.txt</a>'
    )
    