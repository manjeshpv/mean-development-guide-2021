
exports.generateRandomSchools = () => {
  const schools = ['Amarical School in Noida'];

  return schools;
};

exports.addSub = (a, b, c = 1) => {
  if (!c) return Error('pls send parameter c  addSub(a, b ,c) - expected 3 parameters');
  return (a + b) * c;
};

exports.getBucketAndObjectFromUrl = (URL = 'https://req-prod.s3.aws.in/resources-prod/class1-elga.mp4') => {
  const [, bucket, object] = url.split('/');

  return {
    bucket,
    object,
  };
};
