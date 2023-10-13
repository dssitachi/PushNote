

import React, { useState } from 'react';
import { VStack, Text, Input, InputField, Icon, Select, SelectTrigger, SelectPortal, SelectBackdrop, SelectContent, SelectDragIndicatorWrapper, SelectItem, SelectInput, SelectIcon, ChevronDownIcon, SelectDragIndicator } from '@gluestack-ui/themed';

function AddTask() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [to, setTo] = useState('John');
    const [priority, setPriority] = useState('High');

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' }
    ]);

    const handleTitleChange = (text) => {
        setTitle(text);
    };

    const handleDescriptionChange = (text) => {
        setDescription(text);
    };

    const handleToChange = (value) => {
        setTo(value);
    };

    const handlePriorityChange = (value) => {
        setPriority(value);
    };

    const handleSubmit = () => {
        // Handle form submission here
    };

    return (
        <VStack px="$2" py="$2" gap="$2">
            <VStack>
                <Text lineHeight="$xs" mb="$1" bold="true">
                    Task Title
                </Text>
                <Input>
                    <InputField type="text" placeholder="Title" />
                </Input>
            </VStack>

            <VStack>
                <Text lineHeight="$xs" mb="$1" bold="true">
                    Describe Task
                </Text>
                <Input>
                    <InputField type="text" placeholder="Start Writing." />
                </Input>
            </VStack>

            <Text lineHeight="$xs" mb="$1" bold="true">
                Task Title
            </Text>
            <Input>
                <InputField type="text" placeholder="Start Writing." />
            </Input>


          
        </VStack>
    );
}

export default AddTask;