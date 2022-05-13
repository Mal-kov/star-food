import PropTypes from "prop-types";

export const IngradientType = {
  _id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  proteins: PropTypes.number,
  fat: PropTypes.number,
  carbohydrates: PropTypes.number,
  calories: PropTypes.number,
  price: PropTypes.number,
  image: PropTypes.string,
  image_mobile: PropTypes.string,
  image_large: PropTypes.string,
  __v: PropTypes.bool
}

// "_id":"60666c42cc7b410027a1a9b1",
// "":"Краторная булка N-200i",
// "type":"bun",
// "proteins":80,
// "fat":24,
// "carbohydrates":53,
// "calories":420,
// "price":1255,
// "image":"https://code.s3.yandex.net/react/code/bun-02.png",
// "image_mobile":"https://code.s3.yandex.net/react/code/bun-02-mobile.png",
// "image_large":"https://code.s3.yandex.net/react/code/bun-02-large.png",
// "__v":0
