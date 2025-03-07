function toggleMode() {
    document.documentElement.classList.toggle('light');


    //pegar a tag img
    const img = documentquerySelector('#profile img')

    //substituir a imagem de perfil
    if(HTMLAllCollection.classList.contains('light')) {
    //se tiver ligth mode, adicionar a imagem light
        img.setAtribute("scr", './assets/avatar-light.png')
    }
    //se tiver sem light mode, manter a imagem normal
    img.setAtribute("scr"), './assets'
}
