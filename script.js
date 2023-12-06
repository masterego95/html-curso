function submitForm() {
    const courseName = document.getElementById('courseName').value;
    const courseProfessor = document.getElementById('courseProfessor').value;
    const courseCategory = document.getElementById('courseCategory').value;
    const courseDescription = document.getElementById('courseDescription').value;
    const courseImage = document.getElementById('courseImage').value;

  
    console.log('Nome do Curso:', courseName);
    console.log('Professor Responsável:', courseProfessor);
    console.log('Categoria:', courseCategory);
    console.log('Descrição:', courseDescription);
    console.log('URL da Imagem:', courseImage);

  
}
