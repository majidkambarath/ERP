import { Button, Result, Card, Row, Col, Typography, Space, Divider } from 'antd';
import { 
  PhoneOutlined, 
  MailOutlined, 
  GlobalOutlined, 
  GithubOutlined,
  DashboardOutlined,
  TeamOutlined,
  ShoppingCartOutlined,
  BarChartOutlined,
  CustomerServiceOutlined,
  FileTextOutlined
} from '@ant-design/icons';

import useLanguage from '@/locale/useLanguage';

const { Title, Paragraph, Text } = Typography;

const About = () => {
  const translate = useLanguage();

  const features = [
    {
      icon: <DashboardOutlined style={{ fontSize: '24px', color: '#1890ff' }} />,
      title: 'Dashboard Analytics',
      description: 'Real-time business insights and comprehensive reporting dashboard'
    },
    {
      icon: <TeamOutlined style={{ fontSize: '24px', color: '#52c41a' }} />,
      title: 'Customer Management',
      description: 'Complete CRM solution for managing customer relationships and sales pipeline'
    },
    {
      icon: <ShoppingCartOutlined style={{ fontSize: '24px', color: '#722ed1' }} />,
      title: 'Inventory Control',
      description: 'Advanced inventory management with real-time stock tracking'
    },
    {
      icon: <BarChartOutlined style={{ fontSize: '24px', color: '#fa8c16' }} />,
      title: 'Financial Management',
      description: 'Comprehensive accounting and financial reporting tools'
    },
    {
      icon: <FileTextOutlined style={{ fontSize: '24px', color: '#eb2f96' }} />,
      title: 'Document Management',
      description: 'Streamlined document handling and invoice generation'
    },
    {
      icon: <CustomerServiceOutlined style={{ fontSize: '24px', color: '#13c2c2' }} />,
      title: 'Support System',
      description: '24/7 customer support and ticketing system'
    }
  ];

  const contactInfo = [
    {
      icon: <PhoneOutlined style={{ color: '#1890ff' }} />,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      action: () => window.open('tel:+15551234567')
    },
    {
      icon: <MailOutlined style={{ color: '#52c41a' }} />,
      label: 'Email',
      value: 'contact@demo.com',
      action: () => window.open('mailto:contact@demo.com')
    },
    {
      icon: <GlobalOutlined style={{ color: '#722ed1' }} />,
      label: 'Website',
      value: 'www.demo.com',
      // action: () => window.open('https://www.idurarapp.com')
    },
    
  ];

  return (
    <div style={{ padding: '24px', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header Section */}
        <Card 
          style={{ 
            marginBottom: '24px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            border: 'none',
            borderRadius: '12px'
          }}
        >
          <div style={{ textAlign: 'center', color: 'white' }}>
            <Title level={1} style={{ color: 'white', marginBottom: '16px' }}>
              ERP & CRM
            </Title>
            <Paragraph style={{ color: 'white', fontSize: '18px', marginBottom: '24px' }}>
              {translate('Complete Business Management Solution for Modern Enterprises')}
            </Paragraph>
            <Space size="large">
              <Button 
                type="primary" 
                size="large"
                icon={<DashboardOutlined />}
                onClick={() => window.location.href = '/dashboard'}
                style={{ 
                  background: 'rgba(255,255,255,0.2)', 
                  border: '1px solid rgba(255,255,255,0.3)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                Go to Dashboard
              </Button>
              <Button 
                size="large"
                icon={<CustomerServiceOutlined />}
                // onClick={() => window.open('')}
                style={{ 
                  background: 'rgba(255,255,255,0.9)', 
                  color: '#667eea',
                  border: 'none'
                }}
              >
                {translate('Contact us')}
              </Button>
            </Space>
          </div>
        </Card>

        {/* Features Section */}
        <Card 
          title={
            <Title level={2} style={{ textAlign: 'center', marginBottom: 0 }}>
              {/* Why Choose Demo ? */}
            </Title>
          }
          style={{ marginBottom: '24px', borderRadius: '12px' }}
        >
          <Row gutter={[24, 24]}>
            {features.map((feature, index) => (
              <Col xs={24} sm={12} lg={8} key={index}>
                <Card 
                  hoverable
                  style={{ 
                    height: '100%',
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                  }}
                >
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ marginBottom: '16px' }}>
                      {feature.icon}
                    </div>
                    <Title level={4} style={{ marginBottom: '12px' }}>
                      {feature.title}
                    </Title>
                    <Paragraph style={{ color: '#666', margin: 0 }}>
                      {feature.description}
                    </Paragraph>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Card>

        {/* About ERP & CRM Section */}
        <Row gutter={[24, 24]} style={{ marginBottom: '24px' }}>
          <Col xs={24} lg={12}>
            <Card 
              title={
                <Title level={3} style={{ color: '#1890ff', marginBottom: 0 }}>
                  <TeamOutlined /> ERP Solutions
                </Title>
              }
              style={{ height: '100%', borderRadius: '12px' }}
            >
              <Paragraph>
                Our Enterprise Resource Planning (ERP) system streamlines your business operations 
                by integrating all core processes into a unified platform.
              </Paragraph>
              <ul style={{ paddingLeft: '20px' }}>
                <li>Financial Management & Accounting</li>
                <li>Inventory & Supply Chain Management</li>
                <li>Human Resources Management</li>
                <li>Project Management & Tracking</li>
                <li>Reporting & Business Intelligence</li>
              </ul>
            </Card>
          </Col>
          
          <Col xs={24} lg={12}>
            <Card 
              title={
                <Title level={3} style={{ color: '#52c41a', marginBottom: 0 }}>
                  <CustomerServiceOutlined /> CRM Solutions
                </Title>
              }
              style={{ height: '100%', borderRadius: '12px' }}
            >
              <Paragraph>
                Our Customer Relationship Management (CRM) system helps you build stronger 
                relationships with your customers and drive sales growth.
              </Paragraph>
              <ul style={{ paddingLeft: '20px' }}>
                <li>Lead & Opportunity Management</li>
                <li>Customer Database & Segmentation</li>
                <li>Sales Pipeline Tracking</li>
                <li>Marketing Automation</li>
                <li>Customer Support & Ticketing</li>
              </ul>
            </Card>
          </Col>
        </Row>

        {/* Contact Information Section */}
        <Card 
          title={
            <Title level={2} style={{ textAlign: 'center', marginBottom: 0 }}>
              Get in Touch
            </Title>
          }
          style={{ borderRadius: '12px' }}
        >
          <Row gutter={[24, 24]} justify="center">
            {contactInfo.map((contact, index) => (
              <Col xs={24} sm={12} lg={6} key={index}>
                <Card 
                  hoverable
                  onClick={contact.action}
                  style={{ 
                    textAlign: 'center',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  bodyStyle={{ padding: '20px' }}
                >
                  <div style={{ fontSize: '32px', marginBottom: '12px' }}>
                    {contact.icon}
                  </div>
                  <Title level={5} style={{ marginBottom: '8px' }}>
                    {contact.label}
                  </Title>
                  <Text style={{ color: '#666' }}>
                    {contact.value}
                  </Text>
                </Card>
              </Col>
            ))}
          </Row>
          
          <Divider />
          
          <div style={{ textAlign: 'center' }}>
            <Paragraph style={{ fontSize: '16px', marginBottom: '24px' }}>
              {translate('Do you need help on customize of this app')}
            </Paragraph>
            <Space size="large">
              <Button 
                type="primary" 
                size="large"
                icon={<MailOutlined />}
                onClick={() => window.open('mailto:support@idurarapp.com')}
              >
                Email Support
              </Button>
              <Button 
                size="large"
                icon={<PhoneOutlined />}
                onClick={() => window.open('tel:+15551234567')}
              >
                Call Us Now
              </Button>
             
            </Space>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default About;