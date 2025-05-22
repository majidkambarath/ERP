import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import useLanguage from '@/locale/useLanguage';

import { Form, Button } from 'antd';

import { login } from '@/redux/auth/actions';
import { selectAuth } from '@/redux/auth/selectors';
import LoginForm from '@/forms/LoginForm';
import Loading from '@/components/Loading';
import AuthModule from '@/modules/AuthModule';

const LoginPage = () => {
  const translate = useLanguage();
  const { isLoading, isSuccess } = useSelector(selectAuth);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  
  const onFinish = (values) => {
    dispatch(login({ loginData: values }));
  };

  useEffect(() => {
    if (isSuccess) navigate('/');
  }, [isSuccess, navigate]);

  const FormContainer = () => {
    return (
      <Loading isLoading={isLoading}>
        <Form
          layout="vertical"
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          style={{
            width: '100%',
            maxWidth: '400px',
          }}
        >
          <LoginForm />
          <Form.Item style={{ marginBottom: 0, marginTop: '24px' }}>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              loading={isLoading}
              size="large"
              block
              style={{
                height: '48px',
                fontSize: '16px',
                fontWeight: '500',
              }}
            >
              {translate('Log in')}
            </Button>
          </Form.Item>
        </Form>
      </Loading>
    );
  };

  return (
    <div style={{ height: '100vh', overflow: 'hidden' }}>
      <AuthModule authContent={<FormContainer />} AUTH_TITLE="Sign in" />
    </div>
  );
};

export default LoginPage;