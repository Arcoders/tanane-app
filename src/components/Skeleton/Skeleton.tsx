import './Skeleton.scss'

type TSkeleton = {
  length?: number,
  display: boolean,
  modifier: string
}

const Skeleton = ({ length = 1, display, modifier }: TSkeleton) => (
  <>
    {display && Array.from({ length }).map((_, index) => <div className={`skeleton ${modifier}`} key={index}>
      <div className="skeleton__background" />
    </div>
    )}
  </>
)

export default Skeleton;