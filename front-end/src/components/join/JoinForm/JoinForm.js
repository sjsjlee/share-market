import React, { Component } from 'react'
import styles from './JoinForm.scss';
import classNames from 'classnames/bind';
import Button from 'components/common/Button';
import Select from "react-select";

const cx = classNames.bind(styles);
const options = [
  { value: "서울 광진구 구의동", label: "서울 광진구 구의동" },
  { value: "서울 광진구 화양동", label: "서울 광진구 화양동" },
  { value: "서울 광진구 자양동", label: "서울 광진구 자양동" },
  { value: "인천 연수구 송도1동", label: "인천 연수구 송도1동" },
  { value: "인천 연수구 송도2동", label: "인천 연수구 송도2동" },
  { value: "인천 연수구 송도3동", label: "인천 연수구 송도3동" },

]

class JoinForm extends Component {

  handleSelect = ({value}) => {
    console.log(value);
    const { onSelect } = this.props
    onSelect({ inputValue: value })
  }
  handleChangeInput = (e) => {
    const { onChangeInput } = this.props
    const { value, name } = e.target
    onChangeInput({ name, value })
  }

  render() {
    const { username, password, email, onSubmit } = this.props
    const { handleChangeInput, handleSelect } = this
    return (
      <div className={cx('join')}>
        <div className={cx('left')}>
          <h1>쉐어마켓 시작하기</h1>
        </div>

        <form className={cx('join-form')}>
          <div>
            <input type="text" name="username" id="username" placeholder='아이디'
              onChange={handleChangeInput}
              value={username} />
          </div>
          <div>
            <input type="password" name="password" id="password" placeholder='패스워드'
              onChange={handleChangeInput}
              value={password} />
          </div>
          <div>
            <input type="email" name="email" id="email" placeholder="이메일 (sharemarket@example.com)"
              onChange={handleChangeInput}
              value={email} />
          </div>

          <Select onSelectResetsInput={false}
            isSearchable options={options}
            onChange={handleSelect}
            />
        </form>

        <Button onClick={onSubmit}>가입하기</Button>
      </div>
    );
  }
}

export default JoinForm;