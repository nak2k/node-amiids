// via. http://aws.amazon.com/amazon-linux-ami/

// 2013.03
exports = module.exports = {
  'us-east-1': {
    EBSBacked32: 'ami-5675ee3f',
    EBSBacked64: 'ami-3275ee5b',
    InstanceStore32: 'ami-3875ee51',
    InstanceStore64: 'ami-fc75ee95'
  },
  'us-west-2': {
    EBSBacked32: 'ami-d0be2ae0',
    EBSBacked64: 'ami-ecbe2adc',
    InstanceStore32: 'ami-fabe2aca',
    InstanceStore64: 'ami-52bf2b62'
  },
  'us-west-1': {
    EBSBacked32: 'ami-d8d1fc9d',
    EBSBacked64: 'ami-66d1fc23',
    InstanceStore32: 'ami-5ed1fc1b',
    InstanceStore64: 'ami-64d1fc21'
  },
  'eu-west-1': {
    EBSBacked32: 'ami-6893991c',
    EBSBacked64: 'ami-44939930',
    InstanceStore32: 'ami-849298f0',
    InstanceStore64: 'ami-5e93992a'
  },
  'ap-southeast-1': {
    EBSBacked32: 'ami-a29ed2f0',
    EBSBacked64: 'ami-aa9ed2f8',
    InstanceStore32: 'ami-a69ed2f4',
    InstanceStore64: 'ami-ac9ed2fe'
  },
  'ap-northeast-1': {
    EBSBacked32: 'ami-0f3fbf0e',
    EBSBacked64: 'ami-173fbf16',
    InstanceStore32: 'ami-033fbf02',
    InstanceStore64: 'ami-153fbf14'
  },
  'ap-southeast-2': {
    EBSBacked32: 'ami-383eaf02',
    EBSBacked64: 'ami-363eaf0c',
    InstanceStore32: 'ami-343eaf0e',
    InstanceStore64: 'ami-283eaf12'
  },
  'sa-east-1': {
    EBSBacked32: 'ami-a56bb0b8',
    EBSBacked64: 'ami-dd6bb0c0',
    InstanceStore32: 'ami-a36bb0be',
    InstanceStore64: 'ami-db6bb0c6'
  },
};

exports['201303'] = exports;
