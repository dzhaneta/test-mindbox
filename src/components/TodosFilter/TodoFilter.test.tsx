import { render, fireEvent, screen } from '@testing-library/react';
import TodosFilter from './TodosFilter';

describe('TodosFilter Component', () => {
  it('renders filter buttons correctly', () => {
    render(<TodosFilter filter={null} onFilter={() => {}} />);
    const allButton = screen.getByText('All');
    const incompleteButton = screen.getByText('Incomplete');
    const completedButton = screen.getByText('Completed');

    expect(allButton).toBeInTheDocument();
    expect(incompleteButton).toBeInTheDocument();
    expect(completedButton).toBeInTheDocument();
  });

  it('calls onFilter function with the correct filter when a button is clicked', () => {
    const onFilterMock = jest.fn();
    render(<TodosFilter filter={null} onFilter={onFilterMock} />);
    const allButton = screen.getByText('All');
    const incompleteButton = screen.getByText('Incomplete');
    const completedButton = screen.getByText('Completed');

    fireEvent.click(allButton);
    fireEvent.click(incompleteButton);
    fireEvent.click(completedButton);

    expect(onFilterMock).toHaveBeenCalledTimes(3);
    expect(onFilterMock).toHaveBeenCalledWith(null);
    expect(onFilterMock).toHaveBeenCalledWith('incomplete');
    expect(onFilterMock).toHaveBeenCalledWith('completed');
  });

  it('applies the "btn__active" class to the active filter button', () => {
    render(<TodosFilter filter="incomplete" onFilter={() => {}} />);
    const incompleteButton = screen.getByText('Incomplete');

    expect(incompleteButton).toHaveClass('btn__active');
  });

  it('does not apply the "btn__active" class to inactive filter buttons', () => {
    render(<TodosFilter filter="incomplete" onFilter={() => {}} />);
    const allButton = screen.getByText('All');
    const completedButton = screen.getByText('Completed');

    expect(allButton).not.toHaveClass('btn__active');
    expect(completedButton).not.toHaveClass('btn__active');
  });
});
