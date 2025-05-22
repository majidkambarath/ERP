import { Space, Layout, Divider, Typography } from 'antd';
import logo from '@/style/images/bg.jpg';
import useLanguage from '@/locale/useLanguage';
import { useSelector } from 'react-redux';

const { Content } = Layout;
const { Title, Text } = Typography;

export default function SideContent() {
  const translate = useLanguage();

  return (
    <div style={{
      height: '90%',
      width: '90%',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <img
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover', // This will cover the entire area while maintaining aspect ratio
          // objectFit: 'fill', // Use this if you want to stretch the image to fill exactly
          // objectFit: 'contain', // Use this if you want the entire image visible with possible letterboxing
        }}
        src={logo}
        alt="IDURAR ERP CRM"
      />
    </div>
  );
}