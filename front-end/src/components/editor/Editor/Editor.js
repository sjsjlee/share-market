import React, { Component } from 'react';
import styles from './Editor.scss';
import classNames from 'classnames/bind';
import Select from 'react-select';
import { InputGroup, InputGroupAddon, Input, FormGroup, Label, Row, Col } from 'reactstrap';
import Button from 'components/common/Button';

const cx = classNames.bind(styles);
const categories = [
  { value: "카테고리1", label: "카테고리1" },
  { value: "카테고리2", label: "카테고리2" },
  { value: "카테고리3", label: "카테고리3" },
  { value: "카테고리4", label: "카테고리4" },
  { value: "카테고리5", label: "카테고리5" },
  { value: "카테고리6", label: "카테고리6" },
]

class Editor extends Component {
  handleChange = (e) => {
    const { onChangeInput } = this.props
    const { value, name } = e.target
    onChangeInput({ name, value })
  }
  handleSelect = ({ value }) => {
    const { onSelect } = this.props
    onSelect({ inputValue: value })
  }
  render() {
    const { handleChange, handleSelect } = this
    const { onSubmit } = this.props
    const { title, content, price, deposit } = this.props
    return (
      <div>
        <h1>마켓에 제품 등록하기</h1>
        <Row className={cx('top-forms')} form>
          <Col md={6}>
            <Select onSelectResetsInput={false}
              isSearchable options={categories}
              onChange={handleSelect} />
          </Col>
          <Col md={3}>
            <InputGroup>
              <InputGroupAddon addonType="prepend">1일 당</InputGroupAddon>
              <Input placeholder="렌탈비" min={0} type="number" step="1000"
                value={price}
                onChange={handleChange} />
              <InputGroupAddon addonType="append">₩</InputGroupAddon>
            </InputGroup>
          </Col>
          <Col md={3}>
            <InputGroup>
              <Input placeholder="보증금" min={0} type="number" step="1000"
                value={deposit}
                onChange={handleChange} />
              <InputGroupAddon addonType="append">₩</InputGroupAddon>
            </InputGroup>
          </Col>
        </Row>
        <div className={cx('title-forms')}>
          <Input type="text" name="title" id="title" placeholder="제목"
            value={title}
            onChange={handleChange} />
        </div>
        <div className={cx('contents-forms')}>
          <div className={cx('photos')}>
            TODO: import select photo module!
          </div>
          <div className={cx('content')}>
            <FormGroup>
              <Label for="contentText">상세 정보</Label>
              <Input type="textarea" name="content" id="contentText"
                value={content}
                onChange={handleChange} />
            </FormGroup>
          </div>
        </div>
        <div className={cx('buttons')}>
          <Button onClick={onSubmit}>작성하기</Button>
        </div>
      </div>
    );
  }
}

export default Editor;