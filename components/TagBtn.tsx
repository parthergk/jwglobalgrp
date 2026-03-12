const TagBtn = ({name}:{name:string}) => {
  return (
    <div className=' w-fit text-base font-medium italic shadow-2xl bg-tag-bg text-primary rounded-4xl py-0.5 px-4'>{name}</div>
  )
}

export default TagBtn