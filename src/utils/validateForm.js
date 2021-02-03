function createEvent(data) {
  console.log(data)
  let hasError = false;
  let errors = {
    title: [],
    date: [],
    time: []
  };

  const addError = (field, info) => {
    errors[field].push(info);
    hasError = true;
  }

  // validate title field
  if (
    data.title === undefined ||
    data.title === '' ||
    data.title?.replace(' ', '') === ''
  ) {
    addError('title', 'Title field cannot be blank');
  }


  // validate date
  if (data.date == undefined)
    addError('date', 'Date field cannot be blank');
  if (data.date?.month === 'Month' || data.date?.month == undefined)
    addError('date', 'Month field cannot be blank');
  if (data.date?.date === '' || data.date?.date == undefined)
    addError('date', 'Date field cannot be blank');
  if (data.date?.year === '' || data.date?.year == undefined)
    addError('date', 'Year field cannot be blank');

  if (
    isNaN(parseInt(data.date?.date)) ||
    data.date?.date > 31 ||
    data.date?.date < 1
  )
    addError('date', 'Invalid date')
  if (isNaN(parseInt(data.date?.year)))
    addError('date', 'Invalid year')


  // validate time
  if (data.time == undefined)
    addError('time', 'Time field cannot be blank');
  if (data.time?.hour === '' || data.time?.hour == undefined)
    addError('time', 'Hour field cannot be blank');
  if (data.time?.minute === '' || data.time?.minute == undefined)
    addError('time', 'Minute field cannot be blank');

  if (
    data.time?.hour > 12 ||
    data.time?.hour < 1
  )
    addError('time', 'Invalid hour')
  if (
    isNaN(parseInt(data.time?.minute)) ||
    data.time?.minute > 60 ||
    data.time?.minute < 0
  )
    addError('time', 'Invalid minute')



  return hasError === true ? errors : false;
}

export { createEvent }