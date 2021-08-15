// import faker from 'faker';
// import PropTypes from 'prop-types';
// import { Icon } from '@iconify/react';
// import { formatDistance } from 'date-fns';
// import { Link as RouterLink } from 'react-router-dom';
// import arrowIosForwardFill from '@iconify/icons-eva/arrow-ios-forward-fill';
// // material
// import { Box, Link, Card, Button, Divider, Typography, CardHeader } from '@material-ui/core';
// import Stack from '@material-ui/core/Stack';
// //
// // import Scrollbar from '../../Scrollbar';

// // ----------------------------------------------------------------------

// const BLOG = [...Array(5)].map((_, index) => {
//   const setIndex = index + 1;
//   return {
//     title: faker.name.title(),
//     description: faker.lorem.paragraphs(),
//     image: (href = 'https://placeholder.com'(setIndex)),
//     postedAt: faker.date.soon(),
//   };
// });

// // ----------------------------------------------------------------------

// BlogPost.propTypes = {
//   news: PropTypes.object.isRequired,
// };

// function BlogPost({ blog }) {
//   const { image, title, description, postedAt } = posts;

//   return (
//     <Stack direction="row" alignItems="center" spacing={2}>
//       <Box component="img" alt={title} src={image} sx={{ width: 48, height: 48, borderRadius: 1.5 }} />
//       <Box sx={{ minWidth: 240 }}>
//         <Link to="#" color="inherit" underline="hover" component={RouterLink}>
//           <Typography variant="subtitle2" noWrap>
//             {title}
//           </Typography>
//         </Link>
//         <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
//           {description}
//         </Typography>
//       </Box>
//       <Typography variant="caption" sx={{ pr: 3, flexShrink: 0, color: 'text.secondary' }}>
//         {formatDistance(postedAt, new Date())}
//       </Typography>
//     </Stack>
//   );
// }

// export default function BlogPosts() {
//   return (
//     <Card>
//       <CardHeader title="Blog Posts" />

//       <Scrollbar>
//         <Stack spacing={3} sx={{ p: 3, pr: 0 }}>
//           {BLOG.map((blog) => (
//             <Item key={blog.title} blog={blog} />
//           ))}
//         </Stack>
//       </Scrollbar>

//       <Divider />

//       <Box sx={{ p: 2, textAlign: 'right' }}>
//         <Button
//           to="#"
//           size="small"
//           color="inherit"
//           component={RouterLink}
//           endIcon={<Icon icon={arrowIosForwardFill} />}
//         >
//           View all
//         </Button>
//       </Box>
//     </Card>
//   );
// }
