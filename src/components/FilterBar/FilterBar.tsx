import React from 'react';
import './FilterBar.css';
import { FilterOptions } from '../../types';

interface FilterBarProps {
  onFilterChange: (filters: FilterOptions) => void;
  onSortChange: (value: string) => void;
  locations: string[];
  categories: string[];
}

const FilterBar: React.FC<FilterBarProps> = ({ 
  onFilterChange, 
  onSortChange, 
  locations, 
  categories 
}) => {
  const [currentFilters, setCurrentFilters] = React.useState<FilterOptions>({
    category: null,
    priceRange: null,
    duration: null,
    location: null
  });

  const handleFilterChange = (key: keyof FilterOptions, value: any) => {
    const newFilters = {
      ...currentFilters,
      [key]: value
    };
    setCurrentFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearFilters = () => {
    const emptyFilters: FilterOptions = {
      category: null,
      priceRange: null,
      duration: null,
      location: null
    };
    setCurrentFilters(emptyFilters);
    onFilterChange(emptyFilters);
  };

  return (
    <div className="filter-bar">
      <div className="filters-grid">
        <div className="filter-group">
          <label className="filter-label">Location</label>
          <div className="select-wrapper">
            <select 
              className="filter-select"
              value={currentFilters.location || ''}
              onChange={(e) => handleFilterChange('location', e.target.value || null)}
            >
              <option value="">Tutte</option>
              {locations.map(location => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
            <span className="select-arrow">▼</span>
          </div>
        </div>

        <div className="filter-group">
          <label className="filter-label">Categoria</label>
          <div className="select-wrapper">
            <select 
              className="filter-select"
              value={currentFilters.category || ''}
              onChange={(e) => handleFilterChange('category', e.target.value || null)}
            >
              <option value="">Tutte</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            <span className="select-arrow">▼</span>
          </div>
        </div>

        <div className="filter-group">
          <label className="filter-label">Prezzo</label>
          <div className="price-range">
            <div className="price-input-wrapper">
              <input
                type="number"
                placeholder="Minimo"
                className="price-input"
                value={currentFilters.priceRange?.min ?? ''}
                onChange={(e) => handleFilterChange('priceRange', {
                  ...currentFilters.priceRange,
                  min: e.target.value !== '' ? Number(e.target.value) : null
                })}
              />
              <span className="currency">Ξ</span>
            </div>
            <span className="price-separator">a</span>
            <div className="price-input-wrapper">
              <input
                type="number"
                placeholder="Massimo"
                className="price-input"
                value={currentFilters.priceRange?.max ?? ''}
                onChange={(e) => handleFilterChange('priceRange', {
                  ...currentFilters.priceRange,
                  max: e.target.value !== '' ? Number(e.target.value) : null
                })}
              />
              <span className="currency">Ξ</span>
            </div>
          </div>
        </div>
      </div>

      <div className="filter-actions">
        <button onClick={clearFilters} className="clear-filters">
          <span className="clear-icon">×</span>
          Reset filtri
        </button>
        <div className="select-wrapper">
          <select 
            onChange={(e) => onSortChange(e.target.value)}
            className="sort-select"
            defaultValue="default"
          >
            <option value="default">Raccomandato</option>
            <option value="price-asc">Meno costosi</option>
            <option value="price-desc">Più costosi</option>
            <option value="rating">Top Rated</option>
          </select>
          <span className="select-arrow">▼</span>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;