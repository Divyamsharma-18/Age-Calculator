document.addEventListener('DOMContentLoaded', (event) => {
    const dayInput = document.getElementById('day');
    const monthInput = document.getElementById('month');
    const yearInput = document.getElementById('year');
    const calculateButton = document.getElementById('calculate');
  
    function calculateAge() {
      // Get the input values
      const day = dayInput.value;
      const month = monthInput.value;
      const year = yearInput.value;
  
      // Validate the input values
      if (!day || !month || !year) {
        alert('Please enter a valid date.');
        return;
      }
  
      // Calculate the age
      const birthDate = new Date(`${year}-${month}-${day}`);
      const today = new Date();
      let ageYears = today.getFullYear() - birthDate.getFullYear();
      let ageMonths = today.getMonth() - birthDate.getMonth();
      let ageDays = today.getDate() - birthDate.getDate();
  
      if (ageDays < 0) {
        ageMonths -= 1;
        ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
      }
  
      if (ageMonths < 0) {
        ageYears -= 1;
        ageMonths += 12;
      }
  
      // Update the result
      document.getElementById('result-years').textContent = ageYears;
      document.getElementById('result-months').textContent = ageMonths;
      document.getElementById('result-days').textContent = ageDays;
    }
  
    calculateButton.addEventListener('click', calculateAge);
  
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
        event.preventDefault();
  
        if (document.activeElement === dayInput) {
          monthInput.focus();
        } else if (document.activeElement === monthInput) {
          yearInput.focus();
        } else if (document.activeElement === yearInput) {
          calculateAge();
        }
      }
    });
  });
  