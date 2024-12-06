// 姓名验证
export const validateName = (name) => {
  if (!name) return '请输入姓名'
  if (name.length < 2) return '姓名至少2个字符'
  if (name.length > 20) return '姓名不能超过20个字符'
  return ''
}

// 性格选择验证
export const validatePersonality = (personality) => {
  if (!personality) return '请选择性格特征'
  return ''
}

// 表单数据验证
export const validateForm = (data) => {
  const errors = {}
  
  const name1Error = validateName(data.name1)
  if (name1Error) errors.name1 = name1Error
  
  const name2Error = validateName(data.name2)
  if (name2Error) errors.name2 = name2Error
  
  const personality1Error = validatePersonality(data.personality1)
  if (personality1Error) errors.personality1 = personality1Error
  
  const personality2Error = validatePersonality(data.personality2)
  if (personality2Error) errors.personality2 = personality2Error
  
  return errors
} 