import PropTypes from 'prop-types';
import s from './Alert.module.css';
// linear css
// function Alert({text, type = ''}) {
//     const typeClass = type ? `Alert--${type}` : '';
//     return (
//         <p role="alert" className={`Alert ${typeClass}`.trim()}>
//             {text}
//         </p>
//     );
// }
// Alert.propTypes = {
//     text: PropTypes.string.isRequired,
//     type: PropTypes.oneOf(['','success', 'warning', 'error'])
// }

// module.css
function Alert({ text, type }) {
  return (
    <p role="alert" className={s[type]}>
      {text}
    </p>
  );
}
Alert.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'warning', 'error']).isRequired,
};
export default Alert;
