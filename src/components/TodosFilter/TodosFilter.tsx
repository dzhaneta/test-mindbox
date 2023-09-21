import styled from 'styled-components';
import baseTheme from '../../styles/theme';

const StyledFiltersContainer = styled.div`
  display: flex;
  gap: 5px;

  & .btn {
    padding: 5px;
    font-size: inherit;
    line-height: inherit;
    color: inherit;

    &__active {
      border-color: ${baseTheme.colors.accentPink};
    }
  }
`;

interface TodosFilterProps {
  filter: string | null;
  onFilter: (filter: string | null) => void;
}

function TodosFilter({ filter, onFilter }: TodosFilterProps) {
  const handleFilter = (selectedFilter: string | null) => onFilter(selectedFilter);

  return (
    <StyledFiltersContainer>
      <button
        className={`btn ${filter === null ? 'btn__active' : ''}`}
        onClick={() => handleFilter(null)}
        data-testid="filter-all"
      >
        All
      </button>
      <button
        className={`btn ${filter === 'incomplete' ? 'btn__active' : ''}`}
        onClick={() => handleFilter('incomplete')}
        data-testid="filter-incomplete"
      >
        Incomplete
      </button>
      <button
        className={`btn ${filter === 'completed' ? 'btn__active' : ''}`}
        onClick={() => handleFilter('completed')}
        data-testid="filter-completed"
      >
        Completed
      </button>
    </StyledFiltersContainer>
  );
}

export default TodosFilter;
