let database =[
    {
        age : "20",
        email: "salam@gmail.com",
        gender: "kisi",
        hobbies: ['cricket', 'hokky', 'chess'],
        name: "sabir",
        password: "ksksksksksk",
        surname: "eyvazli"
    },
    {
        age : "99",
        email: "jnjnjn@gmail.com",
        gender: "kisi",
        hobbies: ['cricket', 'hokky', 'chess'],
        name: "rustem",
        password: "ksksksksksk",
        surname: "aliyev"
    }
]
const nameINP = document.querySelector(".nameINP");
const soyadINP = document.querySelector(".soyadINP");
const ageINP = document.querySelector(".ageINP");
const emailINP = document.querySelector(".emailINP");
const passwordINP = document.querySelector(".passwordINP");
const genderINP = document.querySelectorAll(".genderINP");
const hobbyINP = document.querySelectorAll(".hobbyINP");
const resetBTN = document.querySelector(".resetBTN");

const forrm = document.querySelector(".forrm");
forrm.addEventListener("submit",function(e){
    e.preventDefault();
    if (nameINP.value.length > 2 && soyadINP.value.length >2 && ageINP.value > 18) {
        validation(nameINP.value, soyadINP.value, ageINP.value, emailINP.value, passwordINP.value);
        }
        else {
        alert("ugursuzdur");
        nameINP.value = "";
        soyadINP.value = "";
        ageINP.value = "";
        emailINP.value ="";
        passwordINP.value ="";
        genderINP.forEach((radio) => {
            radio.checked = false;
        });
        hobbyINP.forEach((checkbox) => {
            checkbox.checked = false;
        });
        }

    function validation(a, s, d, h, j) {
        let salam;
        let obj = {};
        obj.name = a;
        obj.surname = s;
        obj.age = d;
        const selectedHobbies = [];
        hobbyINP.forEach((checkbox) => {
            if (checkbox.checked) {
             selectedHobbies.push(checkbox.value);
            }
        });
        obj.hobbies = selectedHobbies;

        genderINP.forEach((radio) => {
            if (radio.checked){
                obj.gender = radio.value;
            }
        })
        obj.email = h;
        obj.password = j;
        database.push(obj);
        //console.log(database);
        nameINP.value = "";
        soyadINP.value = "";
        ageINP.value = "";
        emailINP.value ="";
        passwordINP.value ="";
        genderINP.forEach((radio) => {
            radio.checked = false;
        });
        hobbyINP.forEach((checkbox) => {
            checkbox.checked = false;
        });
    }
    resetBTN.addEventListener("click", function () {
        nameINP.value = "";
        soyadINP.value = "";
        ageINP.value = "";
        emailINP.value = "";
        passwordINP.value = "";
    
        // Uncheck all gender radio buttons
        genderINP.forEach((radio) => {
            radio.checked = false;
        });
    
        // Uncheck all hobby checkboxes
        hobbyINP.forEach((checkbox) => {
            checkbox.checked = false;
        });
    });
})   
//print elements of database
function print_elements(){
    for(let i=0; i < database.length ; i++){
        console.log(database[i]);
    }
}
print_elements();

//print names from database
function print_names() {
    for (let i = 0; i < database.length; i++) {
        console.log(database[i].name);
    }
}
print_names();

//print names and surnames from database
function print_names_surnames(){
    for(let i=0;i < database.length;i++){
        console.log(database[i].name+" "+database[i].surname)
    }
}
print_names_surnames();
// Eyni zamanda iki ədəd arasında toplama, çıxma, vurma, 
// bölmə əməliyyatlarını yerinə yetirən funsiya yazın. 
// Funksiya dinamik olmalıdır yəni ədədləri parametr olaraq almalıdır.
let bir;
let iki;
function emeliyyatrlar(bir, iki){
    console.log("toplama= "+ (bir + iki))
    console.log("cixma= "+ (bir - iki))
    console.log("vurma= "+ (bir * iki))
    console.log("toplama= "+ (bir / iki))
}
emeliyyatrlar(2, 2)
// Ədədin tək və ya cüt olduğunu təyin edən funksiya yazın. 
// Funksiya dinamik olmalıdır yəni ədədi parametr olaraq almalıdır.
function yoxlama(bir){
    if(bir % 2 == 0 && bir != 0){
        console.log("cutdur");
    }else if(bir == 0){
        console.log("0 dir");
    }else if(bir % 2 == 1){
        console.log("tekdir");
    }
}
yoxlama(5)
yoxlama(2)
yoxlama(0)
