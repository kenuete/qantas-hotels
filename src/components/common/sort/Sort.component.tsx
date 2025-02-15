import { useCallback } from "react"
import Select, { type Options } from '../select/Select.component'
import { SortTypes } from '../../../utils/sort'

const sortByPrice: Options[] = [
    { label: 'Price high-low', value: 'price-high-low' },
    { label: 'Price low-high', value: 'price-low-high' }
]

const sortByList = [...sortByPrice]

export interface SortProps {
    sortBy: SortTypes,
    setSortBy: (e: SortTypes) => void
}

const Sort: React.FC<SortProps> = ({sortBy, setSortBy}) => {

    const onSelect = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        setSortBy(e.target.value as SortTypes)
    }, [setSortBy])

    return (
        <Select options={sortByList} value={sortBy} onChange={onSelect} />
    )
} 


export default Sort