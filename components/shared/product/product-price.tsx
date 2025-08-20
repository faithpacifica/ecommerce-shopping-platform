import { cn } from  "@/lib/utils" // used for dinamic class names

const ProductPrice = ({value,className}:{value:number, className?:string}) => {
// Ensure two decimal places
const stringValue = value.toFixed(2)

// Get the int/float parts

const[intValue, floatValue] = stringValue.split('.')
  return (
    <p className={cn('text-2xl', className)}>
      {intValue}
      <span className="text-xs align-super">{floatValue}</span>
    </p>
  )
}

export default ProductPrice