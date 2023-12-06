function submitForm() {
    const courseName = document.getElementById('courseName').value;
    const courseProfessor = document.getElementById('courseProfessor').value;
    const courseCategory = document.getElementById('courseCategory').value;
    const courseDescription = document.getElementById('courseDescription').value;
    const courseImage = document.getElementById('courseImage').value;

    // Você pode fazer o que quiser com os dados, como enviá-los para um servidor ou armazená-los localmente
    console.log('Nome do Curso:', courseName);
    console.log('Professor Responsável:', courseProfessor);
    console.log('Categoria:', courseCategory);
    console.log('Descrição:', courseDescription);
    console.log('URL da Imagem:', courseImage);

    // Você pode adicionar lógica adicional, como resetar o formulário ou redirecionar o usuário
    // document.getElementById('courseForm').reset();
}
