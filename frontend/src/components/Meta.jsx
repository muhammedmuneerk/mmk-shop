// import { Helmet } from 'react-helmet-async';

// const Meta = ({ title, description, keywords }) => {
//   return (
//     <Helmet>
//       <title>{title}</title>
//       <meta name='description' content={description} />
//       <meta name='keyword' content={keywords} />
//     </Helmet>
//   );
// };

// Meta.defaultProps = {
//   title: 'Welcome To MMKshop',
//   description: 'We sell only the premium products ',
//   keywords: 'electronics, buy electronics, premium electroincs',
//   imageUrl: '../../',
// };

// export default Meta;
import { Helmet } from 'react-helmet-async';

const Meta = ({ title, description, keywords, imageUrl }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph for Social Sharing */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={window.location.href} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Welcome To MMKshop',
  description: 'We sell only premium products',
  keywords: 'electronics, buy electronics, premium electronics',
  imageUrl: '/mmk.png', // Correct relative path for the image in public folder
};

export default Meta;
