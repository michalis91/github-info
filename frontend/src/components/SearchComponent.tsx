import React from 'react';
import { Box, TextField, Button } from '@mui/material';

interface SearchComponentProps {
    inputUsername: string;
    setInputUsername: React.Dispatch<React.SetStateAction<string>>;
    handleSearch: () => void;
}

const SearchComponent: React.FC<SearchComponentProps> = ({
    inputUsername,
    setInputUsername,
    handleSearch
}) => {
    return (
        <Box
            sx={{
                maxWidth: '50%',
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}
        >
            <TextField
                label="GitHub Username"
                variant="outlined"
                value={inputUsername}
                onChange={(e) => setInputUsername(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        handleSearch();
                    }
                }}
                sx={{ marginBottom: '1rem', width: '100%' }}
            />
            <Button
                variant="contained"
                color="primary"
                onClick={handleSearch}
                sx={{ width: '100%' }}
            >
                Search
            </Button>
        </Box>
    );
};

export default SearchComponent;
