const business = {
  opens: '9am',
  closes: '5pm',
  totalEmployees: 5,
  daysOpen: ['M', 'T', 'W', 'Th', 'F'],
  employees: {
    Hannah: {
      position: 'Owner',
      daysOfWeekWorking: ['T', 'Th'],
    },
    Mike: {
      position: 'Developer',
      daysOfWeekWorking: ['M', 'W', 'F'],
    },
    Sherwin: {
      position: 'Aerospace Engineer',
      daysOfWeekWorking: ['M', 'W', 'F'],
    },
    Lisa: {
      position: 'Developer',
      daysOfWeekWorking: ['T', 'Th'],
    },
    Linda: {
      position: 'Pharmacist',
      daysOfWeekWorking: ['M', 'T', 'W', 'Th', 'F'],
    },
  },
};

function addWeekends() {
  const weekends = ['Sa', 'Su'];
  business.daysOpen.push(...weekends);
  for (const employee of business.employees) {
    business.employees[employee].daysOfWeekWorking.push(...weekends);
  }
}
addWeekends();
