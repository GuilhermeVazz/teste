var selectPerson

function gerarTexto() {

    selectPerson = document.getElementById("people").value
        // for (var i = 0; i < personagens.length; i++) {
        //     if (selectPerson == personagens[i].name) {
        //         document.getElementById("name").innerHTML = personagens[i].name
        //         document.getElementById("userName").innerHTML = personagens[i].userName
        //         document.getElementById("showM").value = personagens[i].frase
        //         document.getElementById("picUser").src = personagens[i].url
        //     }
        // }
        personagens.forEach(p => {
            if (selectPerson == p.name) {
                        document.getElementById("name").innerHTML = p.name
                        document.getElementById("userName").innerHTML = p.userName
                        document.getElementById("showM").value = p.frase
                        document.getElementById("picUser").src = p.url
                    }
        })
}

var personagens = [{

    name: "Guilherme Vaz",
    "userName": "@gVazz",
    "frase": "Segue noixxxx ;) "
}
    ,
{
    "name": "Darth Vader",
    "userName": "@LordVader",
    "frase": "Eu sou seu PAI!!!!!"
}
    ,
{
    "name": "Chaves",
    "userName": "@chavito",
    "frase": "Issu, issu, issu..."
}
    ,
{
    "name": "Galvão Bueno",
    "userName": "@falaMuitoGalvão",
    "frase": "É tetraaaaaaaaaaa"
}
    ,
{
    "name": "Yoda",
    "userName": "@yodaMestre",
    "frase": "Que a Força esteja com você! ",
    "url": "./src/images/yoda.png"
}

]