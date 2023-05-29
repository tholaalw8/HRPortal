import { PlusOutlined, UploadOutlined } from '@ant-design/icons';
import {
  Button,
  Cascader,
  Checkbox,
  Col,
  DatePicker,
  Form,
  Input,
  Row,
  Typography,
  Upload,
} from 'antd';
import React, { CSSProperties, useState } from 'react';



const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const FormtStyle: React.CSSProperties = {
  
  minHeight: '200vh',
  lineHeight: '120px',
  fontSize: '20px',
  backgroundColor: 'white',
  marginInline: '30vh',
  marginTop: '2vh',
  marginBottom: '3vh',
  paddingInline: '25vh',
  paddingTop: '10vh',
  
  
  
};


interface IFormProps {
    Formstyle?: CSSProperties
}

const ApplyForm: React.FC = (FormProps:IFormProps) => {
  

  return (
    <>
      
      <Form
        labelCol={{ span: 20 }}
        wrapperCol={{ span: 25 }}
        layout="vertical"
        style={FormtStyle}
      >
        {/* <Form.Item label="Checkbox" name="disabled" valuePropName="checked">
          <Checkbox>Checkbox</Checkbox>
        </Form.Item> */}
        {/* <Form.Item label="Radio">
          <Radio.Group>
            <Radio value="apple"> Apple </Radio>
            <Radio value="pear"> Pear </Radio>
          </Radio.Group>
        </Form.Item> */}
        <Form.Item label="Applied For*">
          <Input/>
        </Form.Item>
        <Form.Item label="Full Name">
          <Input />
        </Form.Item>
        <Form.Item label="ID Card Number">
          <Input />
        </Form.Item>

        <Form.Item label="Date Of Birth">
          <DatePicker />
        </Form.Item>

        <Form.Item label="Current Address">
          <Input />
        </Form.Item>
        <Form.Item label="Permanent Address">
          <Input />
        </Form.Item>
        <Form.Item label="Email Address">
          <Input />
        </Form.Item>
        <Form.Item label="Nationality">
          <Input />
        </Form.Item>


        <Form.Item label="Mobile No.*">
          <Input />
        </Form.Item>

        <Form.Item label="Passport Size Upload " valuePropName="fileList" getValueFromEvent={normFile}>
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item>

        <Form.Item>
             <Row>
                 <Col span={12}>

          <Upload>
           <Button icon={<UploadOutlined />}> ID Card </Button>
           </Upload>

                 </Col>

                 <Col span={12}>

<Upload>
           <Button icon={<UploadOutlined />}> CV </Button>
           </Upload>

                 </Col>
             </Row>




        </Form.Item>



        <Form.Item >

<Upload>
   <Button icon={<UploadOutlined />}> Upload </Button>
   </Upload>
</Form.Item>
       



        <Form.Item>
          <Button style={{background: 'linear-gradient(to right, rgba(106, 17, 203, 0.9), rgba(37, 117, 252, 0.9))', width: '20vh', height: '6vh', color: 'white'}}> <Typography.Text style={{fontSize: '17px', color: 'white'}}>Submit Application</Typography.Text></Button>
        </Form.Item>

        {/* <Form.Item label="Full Name">
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item> */}

{/* 
        <Form.Item label="TreeSelect">
          <TreeSelect
            treeData={[
              { title: 'Light', value: 'light', children: [{ title: 'Bamboo', value: 'bamboo' }] },
            ]}
          />
        </Form.Item>
        <Form.Item label="Cascader">
          <Cascader
            options={[
              {
                value: 'zhejiang',
                label: 'Zhejiang',
                children: [
                  {
                    value: 'hangzhou',
                    label: 'Hangzhou',
                  },
                ],
              },
            ]}
          />
        </Form.Item> */}
        {/* <Form.Item label="DatePicker">
          <DatePicker />
        </Form.Item>
        <Form.Item label="RangePicker">
          <RangePicker />
        </Form.Item>
        <Form.Item label="InputNumber">
          <InputNumber />
        </Form.Item>
        <Form.Item label="TextArea">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Switch" valuePropName="checked">
          <Switch />
        </Form.Item>
        <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={normFile}>
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item> */}
       
      </Form>
    </>
  );
};

export default () => <ApplyForm />;