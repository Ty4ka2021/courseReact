export const required = value => {
  if (value) {
    return undefined;
  } else {
    return 'Field is required  '
  }
}



export const maxLengthCreator = maxLength => value => {
  if (value && value.length > maxLength) {
    return `Max length is ${maxLength} symbols`;
  } else {
    return undefined
  }
}

// export const maxLength30 = value => {
//   if (value && value.length > 30) {
//     return 'Max length is 30 symbols';
//   } else {
//     return undefined
//   }
// }

// export const maxLength50 = value => {
//   if (value && value.length > 50) {
//     return 'Max length is 50 symbols';
//   } else {
//     return undefined
//   }
// }