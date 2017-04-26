import React, {PropTypes} from 'react';

const SelectInput = ({name, label, onChange, defaultOption, value, error, options}) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <div className="field">
                <select 
                    name={name}
                    value={value}
                    onChange={onChange}
                    className="form-control">
                    <option value="">{defaultOption}</option>
                    {options.map(option=>{
                        return <option key={option.value} value={option.value}>{option.text}</option>
                    })
                    }
                {/*<input
                    type="text"
                    name={name}
                    className="form-control"
                    defaultOption={defaultOption}
                    value={value}
                    onChange={onChange} />*/}
                </select>
                {error && <div ClassName="alert alertdanger">{error}</div>}
            </div>
        </div>
    );
};

SelectInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    defaultOption: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object)
};

export default SelectInput;