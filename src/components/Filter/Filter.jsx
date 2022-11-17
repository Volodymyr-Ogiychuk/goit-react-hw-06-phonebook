import PropTypes from 'prop-types'
import s from './Filter.module.css'

const Filter = ({ value, onChange }) => {
    
    return (
        <>
        <label className={s.label}>Find contacts by name</label>
        <input className={s.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan" required
            value={value}
            onChange={onChange}
            />
        </>
    );
};

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Filter;