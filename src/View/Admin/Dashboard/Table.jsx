import { Table } from 'antd';
import React from 'react'

const TableData = () => {
    const columns = [
        {
          title: 'Id',
          dataIndex: 'name',
          key: 'name',
          render: (text) => <a>{text}</a>,
        },
        {
            title: 'Product Image',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
          },
        {
          title: 'Product Name',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Chemical Composition',
          dataIndex: 'address',
          key: 'address',
        },
        {
            title: 'Actions',
            dataIndex: 'age',
            key: 'age',
            render:()=>{
                return (
                    <>
                    <div className='flex justify-around gap-3 text-white cursor-pointer items-center'>
                        <p className='bg-primary p-2 rounded-sm'>Edit</p>
                        <p className='bg-primary p-2 rounded-sm'>Delete</p>
                    </div>
                    </>
                )
            }
          },
      ];
      const data = [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
          tags: ['nice', 'developer'],
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park',
          tags: ['loser'],
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sydney No. 1 Lake Park',
          tags: ['cool', 'teacher'],
        },
      ];
  return (
   <>
   <Table className='mt-4 overflow-x-scroll' pagination={false} columns={columns} dataSource={data} />
   </>
  )
}

export default TableData